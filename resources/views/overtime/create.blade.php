@extends('layout')

@section('title', 'Vacations')

@section('content')
    <h1>{{ trans('global.overtime.work') }}</h1>
    <form method="POST" action="vacation/show">
        @csrf
        <div class="row">
            <div class="col-md-2">
                {{--<input type="text"--}}
                       {{--id="user_id"--}}
                       {{--name="user_id"--}}
                       {{--value="{{ $userInfo->UserID }}" aria-label="user_id" aria-describedby="basic-addon1" hidden>--}}
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="date_of_application">Date of Application</label>
                    <div class="input-group-append">
                        <i class="input-group-text fas fa-calendar-alt bg-gradient-light"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="{{ trans('global.date') }}"
                           id="date_of_application"
                           name="date_of_application"
                           value="{{ date('d-M-Y') }}" aria-label="Date" aria-describedby="basic-addon1" readonly>
                </div>
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="full_name">Full Name</label>
                    <div class="input-group-append">
                        <i class="input-group-text fas fa-user bg-gradient-dark"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="{{ trans('global.user_name') }}"
                           id="full_name"
                           name="full_name"
                           value="{{ $userInfo->FirstName.' '.$userInfo->LastName }}" aria-label="Fullname"
                           aria-describedby="basic-addon1" readonly>
                </div>
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="company">Company</label>
                    <div class="input-group-append">
                        <i class="input-group-text fas fa-building bg-gradient-primary"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="{{ trans('global.user_name') }}"
                           id="company"
                           name="company"
                           value="{{ $userInfo->Company }}" aria-label="Company" aria-describedby="basic-addon1"
                           readonly>
                </div>
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="department">Department</label>
                    <div class="input-group-append">
                        <i class="input-group-text fas fa-briefcase bg-gradient-secondary"></i>
                    </div>
                    <input type="text" class="form-control" placeholder="{{ trans('global.user_name') }}"
                           id="department"
                           name="department"
                           value="{{ $userInfo->Department }}" aria-label="Department" aria-describedby="basic-addon1"
                           readonly>
                </div>
            </div>
            <!-- End Default controls -->

            <!-- Rounded controls -->
            <div class="col-md-2">
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="department_manager">Department Manager</label>
                    <div class="input-group-append">
                        <i class="input-group-text fas fa-user-tie bg-gradient-dark"></i>
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
                        id="method"
                        name="method"
                >
                    <option hidden readonly selected value>-- Chose Method --</option>
                    <option value="1">{{ trans('global.method.free_hours') }}</option>
                    <option value="2">{{ trans('global.method.payment') }}</option>
                </select>
                <div id="checkbox_group">
                    <div class="input-group input-light mb-3 form-label-group input-group-focus">
                        <label for="checkbox_div" class="bg-gradient-success">Check if overtime work is follow-up of
                            regular shift</label>
                        <div class="custom-control custom-checkbox ml-2 my-2 mr-sm-2">
                            <input type="checkbox" class="custom-control-input" id="first_shift" name="first_shift"
                                   value="1" v-model="checkbox_grouped" @change="uniqueCheck">
                            <label class="custom-control-label" for="first_shift">First shift 06:00-14:30</label>
                        </div>
                        <div class="custom-control custom-checkbox ml-2 my-2 mr-sm-2">
                            <input type="checkbox" class="custom-control-input" id="second_shift" name="second_shift"
                                   value="2" v-model="checkbox_grouped" @change="uniqueCheck">
                            <label class="custom-control-label" for="second_shift">Second shift 14:00-22:30</label>
                        </div>
                        <div class="custom-control custom-checkbox ml-2 my-2 mr-sm-5">
                            <input type="checkbox" class="custom-control-input" id="third_shift" name="third_shift"
                                   value="3" v-model="checkbox_grouped" @change="uniqueCheck">
                            <label class="custom-control-label" for="third_shift">Third shift 22:00-06:30</label>
                        </div>
                    </div>
                </div>
                <div class="input-group input-light form-label-group">
                    <label for="note">Reason</label>
                    <div class="input-group-append">
                        <i class="input-group-text far fa-keyboard bg-gradient-primary"></i>
                    </div>
                    <textarea class="form-control" aria-label="With textarea"
                              id="note"
                              name="note"
                    ></textarea>
                </div>
            </div>
            <!-- multi select datepicker -->
            <div class="col-md-3" id='app'>
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="time_from">Time (from - to)</label>
                    <div class="input-group-append">
                        <i class="input-group-text far fa-clock bg-gradient-secondary"></i>
                    </div>
                    {{--<input type="time" class="form-control" value="" id="time_from" name="time_from">--}}
                    <input type="text" pattern="([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}" class="form-control"
                           value="" id="time_from" name="time_from" placeholder="14:30">
                    <div class="input-group-append">
                        <i class="input-group-text fas fa-clock bg-gradient-light"></i>
                    </div>
                    {{--<input type="time" class="form-control" value="" id="time_to" name="time_to">--}}
                    <input type="text" pattern="([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}" class="form-control"
                           value="" id="time_to" name="time_to" placeholder="23:59">
                </div>
                <div class="input-group input-light mb-3 form-label-group">
                    <label for="vacationDate">Select day</label>
                    <div class="input-group-append">
                        <i class="input-group-text fas fa-calendar-day bg-gradient-dark"></i>
                    </div>
                    <vc-date-picker
                            :input-props="{ type: 'input', class: 'form-control', id: 'vacationDate', name: 'vacation_date', autocomplete: 'off' }"
                            {{--:mode="mode"--}}
                            :formats="formats"
                            v-model="selectedDate"
                            {{--is-expanded
                            is-inline--}}
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