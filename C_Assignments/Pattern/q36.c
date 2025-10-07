
#include<stdio.h>
int main()
{
    int n;
    printf("Enter a no.-");
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        for(int j=0;j<=i;j++){
        // for(int j=0;j<(i+1);j++){ 
            printf(" ");                                 
        }
            for(int k=0;k<=i;k++){
                printf("%c",'A'+k);
            }
        printf("\n");
    }
    return 0;
}