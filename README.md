# Dogs_Care_and_Education
Deployment of Dog Breed Classification Model using Docker

# Introduction
This project is an application of using deep learning model in real-time. It provides two features:
1. Performs prediction using dog's image.
2. Performs prediction using live classification using camera.

and then return details about dog's breed. This project is deployed using Docker.

# Working 
The frontend is created using HTML, CSS and JavaScript. The backend is created using Flask. Through frontend, user can upload image of dog and then the backend will perform prediction and return the result. 

# Idea of using tensorflow serving
As we know that prediction requires high computational power. It is not possible to perform prediction on the same machine where the frontend is running as it requires high computational power. So, we need to use tensorflow serving to speed up prediction process. So, we will use tensorflow serving to perform prediction. 

# How to run the project
1. Clone the repository.
</br>

2. Open the terminal and go to the directory where the repository is cloned.
</br>

3. Make sure you have installed docker in your system. If not, then install it.
</br>

4. Run the following command to deploy project using docker:
```bash
docker compose up --build
```
</br>

5. After the image is built, open the browser and go to the following link:
```bash
http://localhost:5000/
```
</br>

6. Now, you can upload the image of dog and then click on predict button to get the result.
</br>

7. To stop the docker, run the following command:
```bash
docker compose down
```

# About model
Model is trained using transfer learning on Resnet_50 architecture. The model is trained on 8 breeds of dogs. The model is trained on 10 epochs and the accuracy is 98%. The model is trained on Google Colab.