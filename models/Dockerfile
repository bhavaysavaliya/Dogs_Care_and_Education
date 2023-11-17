FROM tensorflow/serving
WORKDIR /models
COPY dog_breed_classification /models/dog_breed_classification
COPY models.config /models/models.config
EXPOSE 8501
CMD ["tensorflow_model_server", "--allow_version_labels_for_unavailable_models=true", "--model_config_file=/models/models.config"]