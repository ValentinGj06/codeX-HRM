<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>

    <link type="text/css" rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link type="text/css" rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="{{ asset('css/coreui.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/done.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/bootstrap-select.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/floating-labels.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/bootstrap-datepicker.css') }}" rel="stylesheet" />
</head>
<body class="c-app header-fixed sidebar-fixed aside-menu-fixed pace-done sidebar-lg-show">

    <header class="app-header navbar">
        <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">
            <span class="navbar-brand-full"><img src="{{ asset('images/logo/time-attendance-card.png') }}"></span>
            <span class="navbar-brand-minimized"><img src="{{ asset('images/logo/time-attendance-card.png') }}"></span>
        </a>
        <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
            <span class="navbar-toggler-icon"></span>
        </button>

        <ul class="nav navbar-nav ml-auto">
            @if(count(config('panel.available_languages', [])) > 1)
                <li class="nav-item dropdown d-md-down-none">
                    <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        {{ strtoupper(app()->getLocale()) }}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        @foreach(config('panel.available_languages') as $langLocale => $langName)
                            <a class="dropdown-item" href="{{ url()->current() }}?change_language={{ $langLocale }}">{{ strtoupper($langLocale) }} ({{ $langName }})</a>
                        @endforeach
                    </div>
                </li>
            @endif
                <ul class="c-header-nav mfs-auto">
                    <li class="c-header-nav-item px-3 c-d-legacy-none">


                <button class="c-class-toggler c-header-nav-btn" type="button" id="header-tooltip" data-target="body" data-class="c-dark-theme" data-toggle="c-tooltip" data-placement="bottom" title="" data-original-title="Toggle Light/Dark Mode">
                    <svg class="c-icon c-d-dark-none">
                        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-moon">
                            <svg id="cil-moon" viewBox="0 0 24 24">
                                <title>moon</title><path d="M12.576 23.25c-3.168 0-6.14-1.228-8.369-3.457s-3.457-5.201-3.457-8.369c0-0.001 0-0.002 0-0.003 0-4.58 2.603-8.551 6.411-10.515l0.066-0.031c0.151-0.079 0.33-0.125 0.52-0.125 0.633 0 1.146 0.513 1.146 1.146 0 0.12-0.019 0.236-0.053 0.345l0.002-0.008c-0.293 0.913-0.462 1.962-0.462 3.051 0 2.853 1.158 5.436 3.030 7.304l0 0c1.858 1.872 4.432 3.030 7.277 3.030 0.006 0 0.013 0 0.019-0h-0.001c0.002 0 0.005 0 0.008 0 1.089 0 2.139-0.169 3.125-0.482l-0.073 0.020c0.101-0.032 0.217-0.051 0.337-0.051 0.633 0 1.146 0.513 1.146 1.146 0 0.19-0.046 0.369-0.128 0.527l0.003-0.006c-1.995 3.874-5.967 6.477-10.546 6.477-0.001 0-0.002 0-0.003 0h0zM7.186 2.615c-2.98 1.835-4.936 5.080-4.936 8.782 0 0.010 0 0.019 0 0.029v-0.002c0 5.694 4.632 10.326 10.326 10.326 0.008 0 0.018 0 0.028 0 3.702 0 6.946-1.957 8.756-4.892l0.025-0.044c-0.803 0.194-1.725 0.305-2.673 0.305-0.002 0-0.003 0-0.005 0h0c-0.007 0-0.014 0-0.022 0-3.258 0-6.206-1.326-8.333-3.469l-0.001-0.001c-2.144-2.14-3.47-5.098-3.47-8.366 0-0.947 0.111-1.867 0.321-2.749l-0.016 0.080z"></path>
                            </svg>
                        </use>
                    </svg>
                    <svg class="c-icon c-d-default-none">
                        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-sun">
                            <svg id="cil-sun" viewBox="0 0 24 24">
                                <title>sun</title><path d="M12 4.875c-3.929 0-7.125 3.196-7.125 7.125s3.196 7.125 7.125 7.125 7.125-3.196 7.125-7.125-3.196-7.125-7.125-7.125zM12 17.625c-3.107 0-5.625-2.518-5.625-5.625s2.518-5.625 5.625-5.625c3.107 0 5.625 2.518 5.625 5.625v0c-0.004 3.105-2.52 5.621-5.625 5.625h-0z"></path><path d="M11.25 0.75h1.5v2.25h-1.5v-2.25z"></path><path d="M11.25 21h1.5v2.25h-1.5v-2.25z"></path><path d="M21 11.25h2.25v1.5h-2.25v-1.5z"></path><path d="M0.75 11.25h2.25v1.5h-2.25v-1.5z"></path><path d="M18.22 19.28l1.061-1.061 1.5 1.5-1.061 1.061-1.5-1.5z"></path><path d="M3.22 4.28l1.061-1.061 1.5 1.5-1.061 1.061-1.5-1.5z"></path><path d="M3.22 19.72l1.5-1.5 1.061 1.061-1.5 1.5-1.061-1.061z"></path><path d="M18.22 4.72l1.5-1.5 1.061 1.061-1.5 1.5-1.061-1.061z"></path>
                            </svg>
                        </use>
                    </svg>
                </button>
                    </li>
                </ul>
        </ul>
    </header>

    <div class="app-body">
    @include('partials.menu')
    <main class="main">
        <div style="padding-top: 20px" class="container-fluid">
        @yield ('content')
        </div>
    </main>
    </div>
</body>
{{--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>--}}
<script src="{{ mix('js/app.js') }}"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="{{ asset('js/bootstrap-datepicker.js') }}"></script>
<script src="{{ asset('js/bootstrap-select.min.js') }}"></script>
<script src="{{ asset('js/coreui.js') }}"></script>
<!-- DARK THEME CHANGING -->
<script src="{{ asset('js/coreui.bundle.min.js') }}"></script>
<!-- DARK THEME CHANGING -->
<script src="{{ asset('js/svgxuse.min.js') }}"></script>
<script src="{{ asset('js/done.min.js') }}"></script>
<script src="{{ asset('js/feather.min.js') }}"></script>

<script>
    {{--$(document).ready(function(){--}}

        {{--$("#company").change(function(){--}}
            {{--var companyId = $(this).val();--}}
            {{--$.ajax({--}}
                {{--url: 'department_by_company',--}}
                {{--type: 'post',--}}
                {{--data: {--}}
                    {{--companyId:companyId,--}}
                    {{--"_token": "{{ csrf_token() }}",--}}
                {{--},--}}
                {{--dataType: 'json',--}}
                {{--success:function(response){--}}
                    {{--var len = response.length;--}}
                    {{--$("#department").empty();--}}
                    {{--$("#department").append($('<option>', {--}}
                        {{--value: "",--}}
                        {{--selected: "selected",--}}
                        {{--text: 'Select'--}}
                    {{--}));--}}
                    {{--for( var i = 0; i<len; i++){--}}
                        {{--var department = response[i]['DEPName'];--}}

                        {{--$("#department").append($('<option>', {--}}
                            {{--value: department,--}}
                            {{--text: department--}}
                        {{--}));--}}

                    {{--}--}}
                {{--}--}}
            {{--});--}}
        {{--});--}}
    {{--});--}}
    {{--$(document).ready(function(){--}}

        {{--$("#department").change(function(){--}}
            {{--var departmentName = $(this).val();--}}
            {{--$.ajax({--}}
                {{--url: 'employee_by_department',--}}
                {{--type: 'post',--}}
                {{--data: {--}}
                    {{--department: departmentName,--}}
                    {{--"_token": "{{ csrf_token() }}",--}}
                {{--},--}}
                {{--dataType: 'json',--}}
                {{--success:function(response){--}}
                    {{--var len = response.length;--}}
                    {{--$("#employee").empty();--}}
                    {{--$("#employee").append($('<option>', {--}}
                        {{--value: "",--}}
                        {{--selected: "selected",--}}
                        {{--text: 'Select'--}}
                    {{--}));--}}
                    {{--for( var i = 0; i<len; i++){--}}
                        {{--var id = response[i]['PSNID'];--}}
                        {{--var name = response[i]['PSNNAME'];--}}

                        {{--$("#employee").append($('<option>', {--}}
                            {{--value: id,--}}
                            {{--text: name--}}
                        {{--}));--}}

                    {{--}--}}
                {{--}--}}
            {{--});--}}
        {{--});--}}
    {{--});--}}
    $( function() {
        $( ".datepicker" ).datepicker({
            format: 'd-M-yyyy',
            autoOpen: false,
            firstDay: 1,
            dateFormat: 'mm-dd-yy'
        });
        const days = $('#annual_leave_days').val();
        $("#datepickerVacation").datepicker({
            format: 'd-M-yyyy',
            inline: true,
            lang: 'en',
            step: 5,
            multidate: days,
            todayHighlight: true,
            closeOnDateSelect: true,
            daysOfWeekDisabled: '0',
            weekStart: '1',
            counter: true,
            title: 'Choose your vacation days',


        });
        $('#datepickerVacation').on('changeDate', function() {
            $('#vacationDate').val(
                $('#datepickerVacation').datepicker('getFormattedDate')
            );
        });
    } );
    // $(document).ready(function () {
    //     $('select').selectize({
    //         sortField: 'text'
    //     });
    // });
</script>
</html>