#include <bits/stdc++.h>
using namespace std;

int main()
{
    long long int a, b, c, d;
    cin >> a >> b >> c >> d;

    long long int ab = pow(a, b);
    long long int cd = pow(c, d);

    cout << a << " " << c << endl;

    if (ab > cd)
        cout << "YES";
    else
        cout << "NO";

    return 0;
}