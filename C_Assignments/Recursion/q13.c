
#include <stdio.h>

int sumN(int n) {
    if (n == 0) {
        return 0;
    }
    return n + sumN(n - 1);
}

int main() {
    // int n;
    // printf("Enter N: ");
    // scanf("%d", &n);

    printf("Sum of natural no. = %d", sumN(4));
    return 0;
}