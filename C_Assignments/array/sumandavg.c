#include <stdio.h>>
int main (){

    int n,ele,sum=0,avg=0;
    printf("Enter no of elements ");
    scanf("%d", &n);
    int arr[n];

    for (int k=0 ; k<n ; k++){
        printf("Enter element ");
        scanf("%d",&ele);
        sum+=ele;
        arr[k] = ele;
    }

    printf("Sum is %d\n", sum);

    printf("Avg is %d\n", sum/n);

    return 0;
}