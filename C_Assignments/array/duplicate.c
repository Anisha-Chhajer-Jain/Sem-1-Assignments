#include <stdio.h>
int main(){
    int arr[5] = {1,3,1,4,2} ;

    int n_arr[4] = {} ;

    for (int i = 0 ; i<5 ; i++){
        for (int j=0 ; j<4; j++){
            if(arr[i] == n_arr[j]){
                // printf("%d\n",arr[i]);
                // n_arr[j] = arr[i];
                continue;
            }
            else{
                n_arr[j] = arr[i];
            }
        }
    }

    for (int k=0 ; k<4 ; k++){
        printf("n_arr[%d] = %d\n",k, n_arr[k]);
    }

    return 0;
}