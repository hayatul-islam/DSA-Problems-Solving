#include <stdio.h>
#include <stdlib.h>

int main(){
    int n;
    scanf("%d", &n);
    int a[n][n];

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
          scanf("%d", &a[i][j]);
        }
    }

    int totalPrimary = 0;
    int totalSecondary = 0;

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
          if(i == j){
            totalPrimary += a[i][j];
          }

          if(i+j == n-1){
            totalSecondary += a[i][j];
          }
        }
    }

    printf("%d", abs(totalPrimary - totalSecondary));

    return 0;
}