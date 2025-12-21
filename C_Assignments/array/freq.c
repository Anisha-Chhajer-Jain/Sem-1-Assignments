#include <stdio.h>
int main (){

    int n,ele,c=0;
    printf("Enter no of elements ");
    scanf("%d", &n);
    int arr[n];
    int fre[n];

    for (int k=0 ; k<n ; k++){
        printf("Enter element ");
        scanf("%d",&ele);
        arr[k] = ele;
    }

    for (int i=0 ; i<n ; i++){
        for (int j =0 ; j<n ; j++){
            if(arr[i]== arr[j]){
                c+=1;
            }
        }
        printf("%d is %d times\n",arr[i],c);
        fre[c];
        c=0;
    }

    for (int h=0 ; h<n ; h++){
        int max = fre[0];
        if (fre[h]>max){
            max = fre[h];
        }
        printf("%d has max frequency",arr[h]);
        break;
    }
    
    return 0;
}