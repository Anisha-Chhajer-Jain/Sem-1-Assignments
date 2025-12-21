#include <stdio.h>

int print(int num){
    for(int i=num;i>=1;i--){
        printf("%d\n",i);
    }
    return num;
}
int main() {
    // printf("%d \n",print(5));
    print(5);
    return 0;
}