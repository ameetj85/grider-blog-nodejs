### Common Kubectl commands

#### Deploy a single deployment file

kubectl rollout restart deployment <depl file name>

#### Runn all yaml deployment files in current folder

kubectl apply -f .
kubectl apply -f <depl yaml file name>

#### Get all running services

kubectl get services

#### Get all running pods

kubectl get pods

#### Get logs for a specific pod

kubectl log <pod name>
Pod name can be retrieved from above

#### Get info on specific pod

kubectl describe pods <pod name>

#### kuberenetes command to delete all resources

kubectl delete all --all --namespace default

#### DOCKER command to delete all images

Forcefully Remove Containers and Images

docker rmi -f $(docker images -aq)

OR

docker rmi -f $(docker images -aq)
