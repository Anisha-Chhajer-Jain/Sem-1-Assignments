
#include<stdio.h>
int main()
{
    int n;
    printf("Enter a no.=");
    scanf("%d",&n);                                 
    for(int i=0;i<=n;i++)
    {
        printf("%c ",'A'+i);
    }

  return 0;
}