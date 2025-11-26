
#include <stdio.h>
int productOfDigits(int n) {
    if (n == 0){
       return 1;
    }
    return (n%10)*sumOfDigits(n/10);
}

int main() {
    // int n;
    // printf("Enter a number:-");
    // scanf("%d", &n);

    printf("Product of digits=%d", productOfDigits(45));
    return 0;
}
