#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int y = n / 365;
    n %= 365;

    int m = n / 30;
    int d = n % 30;

    cout << y << " years" << endl;
    cout << m << " months" << endl;
    cout << d << " days" << endl;

    return 0;
}