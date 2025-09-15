#include <stdio.h>
#include <limits.h>

int maxNumber(int a[], int n, int max, int i)
{
    if (i == n)
    {
        return max;
    }

    if (a[i] > max)
    {
        max = a[i];
    }
    maxNumber(a, n, max, i + 1);
}

int main()
{
    int n;
    scanf("%d", &n);
    int a[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }

    int max = maxNumber(a, n, INT_MIN, 0);
    printf("%d", max);

    return 0;
}