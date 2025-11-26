#include <stdio.h>

int print(int num){
    for(int i=1;i<=num;i++){
        printf("%d\n",i);
    }
    return num;
}
int main() {
    // printf("%d \n",print(5));
    print(5);
    return 0;
}