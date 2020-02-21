@extends('layout')

@section('title', 'Vacations')

@section('content')
    <h1>{{ trans('global.annual.leave') }}</h1>
    <form method="POST" action="vacation/show">
        @csrf
        <div class="row">
            <div class="col-md-2">
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="date_of_application">Date of Application</label>
                    <div class="input-group-prepend">
                        <i class="input-group-text fas fa-calendar-alt"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="{{ trans('global.date') }}"
                           id="date_of_application"
                           name="date_of_application"
                           value="{{ date('d-M-Y') }}" aria-label="Date" aria-describedby="basic-addon1" readonly>
                </div>
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="full_name">Full Name</label>
                    <div class="input-group-prepend">
                        <i class="input-group-text fas fa-user"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="{{ trans('global.user_name') }}"
                           id="full_name"
                           name="full_name"
                           value="{{ $userInfo->FirstName.' '.$userInfo->LastName }}" aria-label="Fullname"
                           aria-describedby="basic-addon1" readonly>
                </div>
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="company">Company</label>
                    <div class="input-group-prepend">
                        <i class="input-group-text fas fa-building"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="{{ trans('global.user_name') }}"
                           id="company"
                           name="company"
                           value="{{ $userInfo->Company }}" aria-label="Company" aria-describedby="basic-addon1"
                           readonly>
                </div>
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="department">Department</label>
                    <div class="input-group-prepend">
                        <i class="input-group-text fas fa-briefcase"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="{{ trans('global.user_name') }}"
                           id="department"
                           name="department"
                           value="{{ $userInfo->Department }}" aria-label="Department" aria-describedby="basic-addon1"
                           readonly>
                </div>
                <select required
                        class="form-control selectpicker mb-3"
                        data-style="btn-raised-default"
                        id="replacement"
                        name="replacement"
                >
                    <option hidden readonly selected value>-- will replace me --</option>
                    @foreach($employeesPerDepartment as $employee)
                        <option>{{ $employee->FirstName.' '.$employee->LastName }}</option>
                    @endforeach
                </select>
            </div>
            <!-- End Default controls -->

            <!-- Rounded controls -->
            <div class="col-md-2">
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="department_manager">Department Manager</label>
                    <div class="input-group-prepend">
                        <i class="input-group-text fas fa-user-tie"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="{{ trans('global.user_name') }}"
                           value="{{ $departmentManager->FirstName.' '.$departmentManager->LastName }}"
                           id="department_manager" aria-label="Fullname"
                           name="department_manager"
                           aria-describedby="basic-addon1" readonly>
                </div>
                <select required
                        class="form-control selectpicker mb-3"
                        data-style="btn-raised-default"
                        id="shift_manager"
                        name="shift_manager"
                >
                    <option hidden readonly selected value>-- Shift Manager --</option>
                    @foreach($shiftManagers as $shiftManager)
                        <option>{{ $shiftManager->FirstName.' '.$shiftManager->LastName }}</option>
                    @endforeach
                </select>
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="has_received">Has Received</label>
                    {{--<div class="input-group-prepend">--}}
                    {{--<i class="input-group-text fas fa-building"></i>--}}
                    {{--</div>--}}
                    <input type="text" class="form-control" placeholder="{{ trans('global.user_name') }}"
                           value="" aria-label="Company"
                           id="has_received"
                           name="has_received"
                           aria-describedby="basic-addon1">
                </div>
                <div class="input-group input-light form-label-group">
                    <label for="note">Note / Comment</label>
                    <div class="input-group-prepend">
                        <i class="input-group-text far fa-keyboard"></i>
                    </div>
                    <textarea class="form-control" aria-label="With textarea"
                              id="note"
                              name="note"
                    ></textarea>
                </div>

            </div>
            <!-- multi select datepicker -->
            <div class="col-md-8" id='app'>
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="vacationDate">Select days</label>
                    <div class="input-group-prepend">
                        <i class="input-group-text fas fa-calendar-day"></i>
                    </div>
                    <vc-date-picker
                            :input-props="{ class: 'input form-control', id: 'vacationDate', name: 'vacation_date', autocomplete: 'off' }"
                            :mode="mode"
                            :formats="formats"
                            v-model="selectedDate"
                            {{--is-inline--}}
                    ></vc-date-picker>
                </div>
                <button class="btn btn-primary" type="submit">Send</button>
            </div>
            <!-- multi select datepicker -->
            {{--<form class="">
                <div class="form-label-group">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                    <label for="inputEmail">Email address</label>
                </div>

                <div class="form-label-group">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                    <label for="inputPassword">Password</label>
                </div>
            </form>--}}

        </div>
    </form>
@endsection
<script>

</script>