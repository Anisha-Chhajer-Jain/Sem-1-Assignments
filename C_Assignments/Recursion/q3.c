#include <stdio.h>

int fact(int num){
    if(num == 1){
        return 1;
    }
    return num * fact(num - 1);
}

int main() {
    printf("%d \n",fact(5));
    return 0;
}

