data "aws_caller_identity" "current" {
}



data "aws_vpc" "main" {
  tags = {
    Name = "bitwize-stoma-vpc"
  }
}
output "main" {
  value = data.aws_vpc.main.id
}

#data "aws_subnets" "example" {
#  filter {
#    name   = "vpc-0bc070342db0eb57a"
#    values = [var.vpc_id]
#  }
#}
#
#data "aws_subnet" "example" {
#  for_each = toset(data.aws_subnets.example.ids)
#  id       = each.value
#}
#
#output "subnet_cidr_blocks" {
#  value = [for s in data.aws_subnet.example : s.cidr_block]
#}

#data "aws_subnet_ids" "public" {
#  vpc_id = data.aws_vpc.main.id
#  tags = {
#    Type = "bitwize-stoma-subnet-public1-eu-central-1a"
#  }
#}
#
#data "aws_subnet_ids" "private" {
#  vpc_id = data.aws_vpc.main.id
#  tags = {
#    Type = "bitwize-stoma-subnet-private1-eu-central-1a"
#  }
#}