/**
 * Created by homa_rayaneh on 31/08/2015.
 */
var app=angular.module('app',[]);
    app.controller('basic-page', function ($scope)
    {
        $scope.flag=0;
        console.log('start');
        $scope.number = $scope.number_1;
        $scope.number_1 = 0;
        $scope.number_2 = 0;
        $scope.al='';
        $scope.num_1 = function()
        {
            if($scope.flag==0)
                $scope.number=0;
            $scope.number *=10;
            $scope.number +=1;
            console.log($scope.number);
            $scope.flag=1;
        };
        $scope.num_2 = function()
        {

            if($scope.flag==0)
                $scope.number=0;
            $scope.number *=10;
            $scope.number +=2;
            console.log($scope.number);
            $scope.flag=1;
        };
        $scope.num_3 = function()
        {
            if($scope.flag==0)
                $scope.number=0;
            $scope.number *=10;
            $scope.number +=3;
            console.log($scope.number);
            $scope.flag=1;
        };
        $scope.num_4 = function()
        {
            if($scope.flag==0)
                $scope.number=0;
            $scope.number *=10;
            $scope.number +=4;
            console.log($scope.number);
            $scope.flag=1;
        };
        $scope.num_5 = function()
        {
            if($scope.flag==0)
                $scope.number=0;
            $scope.number *=10;
            $scope.number +=5;
            console.log($scope.number);
            $scope.flag=1;
        };
        $scope.num_6 = function()
        {
            if($scope.flag==0)
                $scope.number=0;
            $scope.number *=10;
            $scope.number +=6;
            console.log($scope.number);
            $scope.flag=1;
        };
        $scope.num_7 = function()
        {
            if($scope.flag==0)
                $scope.number=0;
            $scope.number *=10;
            $scope.number +=7;
            console.log($scope.number);
            $scope.flag=1;
        };
        $scope.num_8 = function()
        {
            if($scope.flag==0)
                $scope.number=0;
            $scope.number *=10;
            $scope.number +=8;
            console.log($scope.number);
            $scope.flag=1;
        };
        $scope.num_9 = function()
        {
            if($scope.flag==0)
                $scope.number=0;
            $scope.number *=10;
            $scope.number +=9;
            console.log($scope.number);
            $scope.flag=1;
        };
        $scope.num_0 = function()
        {
            if($scope.flag==0)
                $scope.number=0;
            $scope.number *=10;
            $scope.number +=0;
            console.log($scope.number);
            $scope.flag=1;
        };
        $scope.plus = function()
        {
            $scope.flag=0;
            if($scope.al=='+')
            {
                $scope.number_1 += $scope.number;
                $scope.number = $scope.number_1;
                console.log('plus :' + $scope.number_1);
            }
            else if($scope.al=='/')
            {
                $scope.number_1 /= $scope.number;
                $scope.number = $scope.number_1;
            }
            else if($scope.al=='-')
            {
                $scope.number_1 -= $scope.number;
                $scope.number = $scope.number_1;
                console.log('divide :' - $scope.number_1);
            }
            else if($scope.al=='*')
            {
                $scope.number_1 *= $scope.number;
                $scope.number = $scope.number_1;
            }
            else
            {
                $scope.number_1 = $scope.number;
                $scope.number = $scope.number_1;
            }
            $scope.al='+';
        };
        $scope.equal = function()
        {
            $scope.flag=0;
            console.log('equal');
            if($scope.al=='+')
            {
                $scope.number_1 += $scope.number;
                $scope.number=0;
            }
            else if($scope.al=='-')
            {
                $scope.number_1 -= $scope.number;
                $scope.number = $scope.number_1;
                console.log('divide :' - $scope.number_1);
            }
            else if($scope.al=='*')
            {
                $scope.number_1 *= $scope.number;
                $scope.number = $scope.number_1;
            }
            else if($scope.al=='/')
            {
                $scope.number_1 /= $scope.number;
                $scope.number = $scope.number_1;
            }
            $scope.al='';
            $scope.number=$scope.number_1;
            $scope.number_1=0;
        };
        $scope.subscribe = function()
        {
            $scope.flag=0;
            if($scope.al=='+')
            {
                $scope.number_1 += $scope.number;
                $scope.number = $scope.number_1;
                console.log('divide :' + $scope.number_1);
            }
            else if($scope.al=='-')
            {
                $scope.number_1 -= $scope.number;
                $scope.number = $scope.number_1;
                console.log('divide :' - $scope.number_1);
            }
            else if($scope.al=='/')
            {
                $scope.number_1 /= $scope.number;
                $scope.number = $scope.number_1;
            }
            else if($scope.al=='*')
            {
                $scope.number_1 *= $scope.number;
                $scope.number = $scope.number_1;
            }
            else
            {
                $scope.number_1 = $scope.number;
                $scope.number = $scope.number_1;
            }
            $scope.al='-';
        }
        $scope.divide = function()
        {
            $scope.flag=0;
            if($scope.al=='+')
            {
                $scope.number_1 += $scope.number;
                $scope.number = $scope.number_1;
                console.log('plus :' + $scope.number_1);
            }
            else if($scope.al=='-')
            {
                $scope.number_1 -= $scope.number;
                $scope.number = $scope.number_1;
                console.log('divide :' - $scope.number_1);
            }
            else if($scope.al=='/')
            {

                $scope.number_1 /= $scope.number;
                $scope.number = $scope.number_1;
            }
            else if($scope.al=='*')
            {
                $scope.number_1 *= $scope.number;
                $scope.number = $scope.number_1;
            }
            else
            {
                $scope.number_1 = $scope.number;
                $scope.number = $scope.number_1;
            }
            $scope.al='/';
        }
        $scope.multiple = function()
        {
            $scope.flag=0;
            if($scope.al=='+')
            {
                $scope.number_1 += $scope.number;
                $scope.number = $scope.number_1;
                console.log('plus :' + $scope.number_1);
            }
            else if($scope.al=='-')
            {
                $scope.number_1 -= $scope.number;
                $scope.number = $scope.number_1;
                console.log('divide :' - $scope.number_1);
            }
            else if($scope.al=='/')
            {
                $scope.number_1 /= $scope.number;
                $scope.number = $scope.number_1;
            }
            else if($scope.al=='*')
            {
                $scope.number_1 *= $scope.number;
                $scope.number = $scope.number_1;
            }
            else
            {
                $scope.number_1 = $scope.number;
                $scope.number = $scope.number_1;
            }
            $scope.al='*';
        }
        $scope.c = function()
        {
            $scope.al='';
            $scope.number=0;
            $scope.number_1=0;
        }
    });