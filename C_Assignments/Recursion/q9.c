
#include <stdio.h>

int power(int a, int n) {
    if (n==0)
        return 1;         
    return a*power(a,n-1); 
}

int main() {
    int a, n;
    // printf("Enter base and exponent: ");
    // scanf("%d %d", &a, &n);

    printf("Result = %d", power(2, 3));

    return 0;
}





