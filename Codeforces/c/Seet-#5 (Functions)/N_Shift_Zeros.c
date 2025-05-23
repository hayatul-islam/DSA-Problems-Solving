#include <stdio.h>

void shiftZeros(int a[], int n)
{
    int b[n];
    int idx = 0;
    int lastIdx = n - 1;

    for (int i = 0; i < n; i++)
    {
        if (a[i] == 0)
        {
            b[lastIdx] = a[i];
            lastIdx--;
        }
        else
        {
            b[idx] = a[i];
            idx++;
        }
    }

    for (int i = 0; i < n; i++)
    {
        printf("%d ", b[i]);
    }
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

    shiftZeros(a, n);

    return 0;
}