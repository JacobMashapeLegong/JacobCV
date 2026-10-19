
terraform {
  required_version = ">= 1.5.0"

  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 4.2"
    }
  }
}

provider "docker" {}

resource "docker_image" "cv_app" {
  name = "cv-app:local"

  build {
    context    = path.module
    dockerfile = "Dockerfile"
  }
}

resource "docker_container" "cv_app" {
  name  = "cv-app"
  image = docker_image.cv_app.image_id

  ports {
    internal = 80
    external = 8080
    ip       = "127.0.0.1"
  }

  restart = "unless-stopped"
}

output "local_url" {
  value = "http://localhost:8080"
}
