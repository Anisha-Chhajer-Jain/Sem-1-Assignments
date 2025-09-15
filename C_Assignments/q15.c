#include <stdio.h>

int main() {
    int  n;
    printf("Enter a no.=");
    scanf("%d",&n);
    for (int i = 0; i <= n; i++) {
        for (int j = 0; j <= n - i; j++) {
          printf("  ");
        }
        for (int j = 1; j <= i; j++) {
            printf("%c ",'A'+j);
        }
        for (int k = 0; k <= 2*n ; k++) {
        }
        for (int l = 0; l <= i; l++) {
            printf("%c ",'A'+l);
        }
        printf("\n");
        }
    return 0;
}
