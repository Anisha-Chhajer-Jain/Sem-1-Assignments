#include<stdio.h>
int main()
{
    int n;
    printf("Enter a no.=");
    scanf("%d",&n);
    int count=n*(n+1)/2;
    for(int i=0;i<=n;i++){
        for(int j=0;j<i;j++){
        printf("%d ",count);
        count--;
        }
        printf("\n");
    }

  return 0;
}
