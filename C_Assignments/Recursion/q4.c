#include <stdio.h>

int main() {
    int a=0,b=1,c,num;
    printf("Enter a no.");
    scanf("%d",&num);
    printf("%d %d ",a,b);
    for(int i=3;i<=num;i++){
        c=a+b;
        a=b;
        b=c;
        printf("%d ",c);
    }
    return 0;
}


