# Dogs_Care_and_Education
Deployment of Dog Breed Classification Model using Docker

# Introduction
This project is an application of using deep learning model in real-time. It provides two features:
1. Performs prediction using dog's image.
2. Performs prediction using live classification using camera.

and then return details about dog's breed. This project is deployed using Docker.

# Working 
The frontend is created using HTML, CSS and JavaScript. The backend is created using Flask. Through frontend, user can upload image of dog and then the backend will perform prediction and return the result. 

# Requirements to run on your system
1. Docker
2. Internet Data (max 2GB)
3. 8GB RAM

# Idea of using tensorflow serving
As we know that prediction requires high computational power. It is not possible to perform prediction on the same machine where the frontend is running as it requires high computational power. So, we need to use tensorflow serving to speed up prediction process. So, we will use tensorflow serving to perform prediction. 

# How to run the project
1. Clone the repository.
```bash
git clone https://github.com/bhavaysavaliya/Dogs_Care_and_Education.git
```
</br>

2. Open the terminal and go to the directory where the repository is cloned.
```bash
cd Dogs_Care_and_Education
```
</br>

3. Make sure you have installed docker in your system. If not, then install it.
</br>

4. Run the following command to deploy project using docker:
```bash
docker compose up --build
```
</br>

5. After the image is built, open the browser and go to [http://localhost:5000/](http://localhost:5000/).
</br>

6. Now, you can upload the image of dog and then click on predict button to get the result.
</br>

7. After predicting you can view entry in database by visiting url [http://localhost:8501/](http://localhost:8501/). Here, mongo express will be running. Give username as "admin" and password as "pass". Then go to "test" database and select "result" collection. You will see the saved entry.
<br/>

8. Before exiting, stop execution by clicking Ctrl + C, then run the following command:
```bash
docker compose down
```

# About model
Model is trained using transfer learning on Resnet_50 architecture. The model is trained on 8 breeds of dogs. The model is trained by 10 epochs and the accuracy is 98%. The model is trained on Google Colab.