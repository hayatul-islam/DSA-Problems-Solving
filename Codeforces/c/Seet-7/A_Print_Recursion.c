#include <stdio.h>

void printTxt(int n, int i)
{
    if (i == n)
    {
        return;
    }
    printf("I love Recursion\n");
    printTxt(n, i + 1);
}

int main()
{
    int n;
    scanf("%d", &n);
    printTxt(n, 0);
    return 0;
}