#include <stdio.h>   
int n;
void max(int arr[]){
    int max = arr[0];

    for (int i=0 ; i<n ;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    printf("Max is %d\n",max);
}

void min(int arr[]){
    int min = arr[0];

    for (int j=0 ; j<n ; j++){
        if(arr[j]<min){
            min = arr[j];
        }
    }
    printf("Min is %d\n", min);
}

int main (){

    int n,ele;
    printf("Enter no of elements ");
    scanf("%d", &n);
    int arr[n];

    for (int k=0 ; k<n ; k++){
        printf("Enter element ");
        scanf("%d",&ele);
        arr[k] = ele;
    }

    max(arr);

    return 0;
}
