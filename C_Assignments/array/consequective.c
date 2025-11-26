#include <stdio.h>
int main(){
    int arr[] = {1,3,4,5};
    for (int i= 0 ; i<3 ; i++){
        if(arr[i+1] != (arr[i]+1)){
            printf("%d", arr[i]+1 );
        }
    }
    return 0;
}