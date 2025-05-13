#include <stdio.h>
int main()
{
    int r, c;
    scanf("%d %d", &r, &c);
    int a[r][c];
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }

    int num;
    scanf("%d", &num);
    int isNum = 0;

    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            if (a[i][j] == num)
            {
                isNum = 1;
            }
        }
    }

    if(isNum){
        printf("will not take number");
    }else{
        printf("will take number");
    }

    return 0;
}