#include <stdio.h>
int main(){
    int n; 
    scanf("%d", &n);

    int i=0, j=n-1;
    while (i<=j)
    {
        for(int m=0; m<n; m++){
            if(i==m && j==m){
                printf("X");
            }else if(m==i){
                printf("\\");
            }else if(m==j){
                printf("/");
            } else {
                printf("*");
            }
        }

        if(i==j){
            printf("\n");
            i--;
            j++;
            break;
        }

        i++;
        j--;
       printf("\n");   
    }

    while (i>=0)
    {
        for(int m=0; m<n; m++){
             if(m==i){
                printf("/");
            }else if(m==j){
                printf("\\");
            } else {
                printf("*");
            }
        }

        i--;
        j++;
       printf("\n");   
    }

    return 0;
}