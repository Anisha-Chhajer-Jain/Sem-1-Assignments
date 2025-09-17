
#include<stdio.h>
int main()
{
    int n,count=1;
    printf("Enter a no.=");
    scanf("%d",&n);
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<i;j++)                         
        {
        count=count+2;
        printf("%d ",count);
        }
        printf("\n");
    }

  return 0;
}


