variable "service_name" {
  type        = string
  description = "the name of the service."
}

variable "aws_region" {
  type        = string
  description = "the name of the service."
}

variable "image_tag" {
  type 			= string
  description 	= "Given image tag for the current deployment."
}

variable "vpc_name" {
  type 	= string
  description = "Name of the containing VPC. Required."
}
variable "public_subnets" {
  type    = list(string)
  default = []
}

variable "vpc_id" {
  type = string
  description = "Id of VPC"
}

variable "account_id" {
  type = string
  description = "ID of the AWS account"
}
