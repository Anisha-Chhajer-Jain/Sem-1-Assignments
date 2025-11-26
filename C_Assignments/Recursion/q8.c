#include <stdio.h>
int count(int n) {
    if (n==0){
      return 0;
    }
    else if(n<10){
        return 1;
    }
    return 1+count(n/10);
}

int main() {
    // int n;
    // printf("Enter a number:-");
    // scanf("%d", &n);

    printf("No. of digits=%d", count(1233));
    return 0;
}

