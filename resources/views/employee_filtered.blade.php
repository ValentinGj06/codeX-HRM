@extends('layout')

@section('title', 'Filtered Employees')

@section('content')
    {{--@php
        dd($employeeHours);
    @endphp--}}
    <h1>Извештај за работни саати од: {{ $dateFrom }} до: {{ $dateTo }}</h1>
    <div class="card" id="card_profile">
        <div class="container">
            <div class="user-info">
                <div class="chip-profile">
                    <i class="fas fa-user-check"></i>
                    Вработени:
                    {{ count($employeeHours) }}
                </div>
            </div>
        </div>
    </div>
 {{--   <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="card" id="card_info">
                <div class="container">
                    <div class="info-box">
                        <span class="info-box-icon bg-green"><i class="fas fa-sign-in-alt"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Прв влез</span>
                            <span class="info-box-number"><p>{{ $employeeHours[0]->FirstIn }}</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="card" id="card_info">
                <div class="container">
                    <div class="info-box">
                        <span class="info-box-icon bg-blue"><i class="fas fa-sign-out-alt"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Последен излез</span>
                            <span class="info-box-number"><p>{{ $employeeHours[0]->LastOut }}</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="card" id="card_info">
                <div class="container">
                    <div class="info-box">
                        <span class="info-box-icon bg-purple"><i class="fas fa-user-clock"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Датум</span>
                            <span class="info-box-number"><p>{{ $employeeHours[0]->dt }}</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="card" id="card_info">
                <div class="container">
                    <div class="info-box">
                        <span class="info-box-icon bg-yellow"><i class="far fa-hourglass"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Работини часа</span>
                            <span class="info-box-number"><p>{{ $employeeHours[0]->WorkingHours }}</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>--}}
    <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="card" id="card_info">
                <div class="container">
                    <div class="info-box">
                        <span class="info-box-icon bg-green"><i class="fas fa-sign-in-alt"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Ден</span>
                            <span class="info-box-number"><p>{{ date('D - d') }}</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="card" id="card_info">
                <div class="container">
                    <div class="info-box">
                        <span class="info-box-icon bg-blue"><i class="fas fa-sign-out-alt"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Месец</span>
                            <span class="info-box-number"><p>{{ date('M') }}</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="card" id="card_info">
                <div class="container">
                    <div class="info-box">
                        <span class="info-box-icon bg-purple"><i class="fas fa-user-clock"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Година</span>
                            <span class="info-box-number"><p>{{ date('Y') }}</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="card" id="card_info">
                <div class="container">
                    <div class="info-box">
                        <span class="info-box-icon bg-yellow"><i class="far fa-hourglass"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Работини часа во месецот</span>
                            <span class="info-box-number">
                                <p>
                                    @php
                                    $sum = 0;
                                    @endphp
                                    @foreach($employeeHours as $key=>$value)
                                       @php $sum+= $value->WorkingHours; @endphp
                                    @endforeach
                                    {{ $sum }}
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <table class="table table-responsive-sm table-hover table-outline mb-0">
            <thead class="thead-light">
            <tr>
                <th>#</th>
                <th>Име и Презиме</th>
                <th>Месец</th>
                <th>Прв влез</th>
                <th>Последен излез</th>
                <th>Одработени часови</th>
            </tr>
            </thead>
            <tbody>
            <?php $i = 1; ?>
            {{--@dd($employeeHours);--}}
            @foreach($employeeHours as $allEmployeeHours)
            <tr>
                <td> {{ $i++ }} </td>
                <td> {{ $allEmployeeHours->PSNNAME }}</td>
                <td> {{ date('M') }} </td>
                <td> {{ $allEmployeeHours->FirstIn }} </td>
                <td> {{ $allEmployeeHours->LastOut }} </td>
                <td> {{ $allEmployeeHours->WorkingHours }} </td>
            </tr>
                @endforeach
            </tbody>
        </table>

@endsection
