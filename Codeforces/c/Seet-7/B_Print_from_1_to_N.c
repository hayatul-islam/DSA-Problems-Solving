#include <stdio.h>

void printN(int n, int i)
{
    if (n == i - 1)
    {
        return;
    }

    printf("%d\n", i);
    printN(n, i + 1);
}

int main()
{
    int n;
    scanf("%d", &n);

    printN(n, 1);
    return 0;
}