package main

import (
	"context"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"

	// Add the MongoDB driver packages
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	// Go reading .env file
	"github.com/joho/godotenv"
)

var mongoClient *mongo.Client

// global variables

func init() {
	if err := connect_to_mongodb(); err != nil {
		log.Fatal("Could not connect to MongoDB")
	}
}

// use godot package to load/read the .env file and
// return the value of the key
func goDotEnvVariable(key string) string {

	// load .env file
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}

func main() {

	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello World from Gin",
		})
	})

	r.GET("/movies", getMovies)
	r.GET("/movies/:id", getMovieByID)

	r.Run()
}

func getMovies(c *gin.Context) {
	database_name := goDotEnvVariable("DB_NAME")
	cursor, err := mongoClient.Database(database_name).Collection("movies").Find(context.TODO(), bson.D{{}})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	var movies []bson.M
	if err = cursor.All(context.TODO(), &movies); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Return movies
	c.JSON(http.StatusOK, movies)
}

// func getMovieByID(c *gin.Context) {
// 	id := c.Param("id")
// 	fmt.Println("ID: ", id)
// 	var movie bson.M
// 	database_name := goDotEnvVariable("DB_NAME")
// 	err := mongoClient.Database(database_name).Collection("movies").FindOne(context.TODO(), bson.D{{"_id", id}}).Decode(&movie)
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
// 		return
// 	}

// 	c.JSON(http.StatusOK, movie)
// }

func getMovieByID(c *gin.Context) {

	// Get movie ID from URL
	idStr := c.Param("id")

	// Convert id string to ObjectId
	id, err := primitive.ObjectIDFromHex(idStr)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Find movie by ObjectId
	var movie bson.M
	err = mongoClient.Database("sample_mflix").Collection("movies").FindOne(context.TODO(), bson.D{{"_id", id}}).Decode(&movie)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Return movie
	c.JSON(http.StatusOK, movie)
}

func connect_to_mongodb() error {
	db_url := goDotEnvVariable("DB_URL")
	serverAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(db_url).SetServerAPIOptions(serverAPI)

	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		panic(err)
	}
	err = client.Ping(context.TODO(), nil)
	mongoClient = client
	return err
}
