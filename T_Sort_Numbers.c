#include <stdio.h>
int main()
{
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);

    int x, y, z;
    if (a < b < c)
    {
        x = c;
        printf("%d", c);
    }

    return 0;
}