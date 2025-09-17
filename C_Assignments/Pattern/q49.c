#include<stdio.h>
int main()
{
    int n,count=0;
    printf("Enter a no.=");
    scanf("%d",&n);
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)                                 
        {
        printf("%c ",'A'+count);
        count=count+1;
        }
        printf("\n");
    }

  return 0;
}
