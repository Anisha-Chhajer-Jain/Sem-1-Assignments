#include <stdio.h>
int main(){

    int n,ele;
    printf("Enter no of elements ");
    scanf("%d", &n);
    int arr[n];

    for (int k=0 ; k<n ; k++){
        printf("Enter element ");
        scanf("%d",&ele);
        arr[k] = ele;
    }

    int rev[n];
    for (int i=0 ; i<n ; i++){
        rev [n-i-1] = arr[i];
    }

    for (int i=0 ; i<n ; i++){
        printf("rev [%d] = %d\n",i,rev[i]);
    }

    for (int h=0 ; h<n ; h++){
        if(rev[h]!=arr[h]){
            printf("Not a palindrome");
            break;
        }
        else{
            goto next;
        }
    }

    next: printf("Palindrome");

    return 0;
}