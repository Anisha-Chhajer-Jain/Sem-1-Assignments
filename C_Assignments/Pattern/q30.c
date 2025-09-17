#include <stdio.h>

int main() {
    int  n;
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i+j>n/2)
            printf("%c",'A'+j);
            else
            printf(" ");
        }
        for(int j=0;j<i;j++)
        {
            printf("%c",'A'+j);
        }
        printf("\n");
    }
                                                                    
    
    for (int i = 0; i < n; i++) {
        for(int j=0;j<n;j++)
        {
            if(j-i>=0)
            printf("%c",'A'+j);
            else
            printf(" ");

        }
        for(int j=0;j<n;j++){
            if(i+j<n-1){
              printf("%c",'A'+j);
            }
            else{
                printf(" ");
            }
        }
        printf("\n");
        }
    return 0;
}


