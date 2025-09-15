
#include <stdio.h>

int main() {
    int  n;
    printf("Enter a no.=");
    scanf("%d",&n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) {
          printf(" ");
        }
        for (int j = 1; j <= i; j++) {
            printf("%d",j);
        }
        for (int k = 1; k <= 2*n ; k++) {
        }
        for (int l = 1; l <= i; l++) {
            printf("%d",l);
        }
        printf("\n");
        }
    return 0;
}


