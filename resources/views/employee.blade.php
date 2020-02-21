@extends('layout')

@section('title', 'Employees')

@section('content')
    <h1>Мој профил</h1>
    <div class="card" id="card_profile">
        <img alt="PHOTO" class="profile-photo" src="data:image/bmp;base64, {{ base64_encode($employee->PSPPHOTO) }}"/>
        <div class="container">
            <div class="user-info">
                <div class="chip-profile">
                    <i class="fas fa-user-tag"></i>
                    {{ $employeeHours[0]->PSNNAME }}
                </div>
                <div class="chip-profile">
                    <i class="fas fa-briefcase"></i>
                    <b>Software Developer</b>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
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
                            <span class="info-box-number"><p>{{ date("Y-m-d") }}</p></span>
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
                            <span class="info-box-number"><p>
                                    @php
                                        $sum = 0;
                                        $currentDate = date("Y-m-d", strtotime("-0 days"));
                                    @endphp
                                    @foreach($employeeHours as $key=>$value)
                                        @if ($value->dt == $currentDate)
                                        @php $sum+= $value->WorkingHours; @endphp
                                        @endif
                                    @endforeach
                                    {{ $sum }}
                                </p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                                    {{--@dd($employeeHours);--}}
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
                <th>Датум</th>
                <th>Влез</th>
                <th>Излез</th>
                <th>Одработени минути</th>
            </tr>
            </thead>
            <tbody>
            <?php $i = 1; ?>
            @foreach($employeeEvents as $employeeEvent)
            <tr>
                <td> {{ $i++ }} </td>
                <td> {{ $employeeEvent->PSNNAME }}</td>
                <td> {{ $employeeEvent->dt }} </td>
                <td> {{ $employeeEvent->LogIn }} </td>
                <td> {{ $employeeEvent->LogOut }} </td>
                <td> {{ $employeeEvent->WorkingMinutes }} </td>
            </tr>
                @endforeach
            </tbody>
        </table>

@endsection
