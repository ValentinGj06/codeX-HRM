@extends('layout')

@section('title', 'Employees')


@section('content')
    <h1>List All Employees</h1>
    <form method="POST" class="form-inline" action="employee/filtered/all">
        @csrf
        <div class="input-group input-light mb-3 form-label-group">
            <label for="time_from">Date (from - to)</label>
            <div class="input-group-append">
                <i class="input-group-text fas fa-calendar-day"></i>
            </div>
            <input type="text" class="form-control datepicker" placeholder="Date from:"
                   name="date_from"
                   id="date_from"
                   autocomplete="off">
            <div class="input-group-append">
                <i class="input-group-text fas fa-calendar-day"></i>
            </div>
            <input type="text" class="form-control datepicker" placeholder="Date to:"
                   name="date_to"
                   id="date_to"
                   autocomplete="off">
        </div>
        <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="form-group">
                <select class="form-control selectpicker mb-3"
                        data-style="btn-raised-default"
                        id="company"
                        name="company"
                >
                    <option hidden readonly selected value>-- select employee --</option>
                    @foreach($allEmployee as $key => $value)
                        <option value="<?= $value['CMPID'] ?>"><?= $value['CMPName'] ?></option>
                    @endforeach
                </select>
            </div>
        </div>
      <!--  <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="form-group">
                <select name="company" id="company" class="form-control width-180">
                    <option value="" selected="selected">Select</option>
                    @foreach ($allEmployee as $key => $value)
                        <option style="{{ ($value['active'] == 'Y') ? '':'background-color:#D3D3D3' }}"
                                value="<?= $value['CMPID'] ?>"><?= $value['CMPName'] ?></option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="form-group">
                <select name="department" id="department" class="form-control width-180">
                    <option value="" selected="selected">Select</option>
                    @foreach ($allEmployee as $key => $value)
                        <option style="{{ ($value['active'] == 'Y') ? '':'background-color:#D3D3D3' }}"
                                value="<?= $value['DEPName'] ?>"><?= $value['DEPName'] ?></option>
                    @endforeach
                </select>
            </div>
        </div>-->
        <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="form-group">
                <select class="form-control selectpicker mb-3"
                        data-style="btn-raised-default"
                        id="department"
                        name="department"
                >
                    <option hidden readonly selected value>-- select employee --</option>
                    @foreach($allEmployee as $key => $value)
                        <option value="<?= $value['DEPName'] ?>"><?= $value['DEPName'] ?></option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="form-group">
                <select class="form-control selectpicker mb-3"
                        data-style="btn-raised-default"
                        id="employee"
                        name="employee"
                >
                    <option hidden readonly selected value>-- select employee --</option>
                    @foreach($allEmployee as $key => $value)
                        <option value="<?= $value['PSNID'] ?>"><?= $value['PSNNAME'] ?></option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="container">
                <button type="submit" class="btn btn-secondary">Search</button>
            </div>
        </div>
    </form>
    <table class="table table-responsive-sm table-hover table-outline mb-0">
        <thead class="thead-light">
        <tr>
            <th>#</th>
            <th>Слика</th>
            <th>Име и Презиме</th>
            <th>Број на картичка</th>
            <th>Оддел</th>
            <th>Позиција</th>
            <th>Титула</th>
        </tr>
        </thead>
        @foreach($allEmployee as $employees)
            <tbody>
            <tr class="pointer" onclick="window.location='/employee/{{ $employees->PSNID }}';">
                <td>{{ $employees->PSNID }}</td>
                <td><img alt="PHOTO" class="profile-photo"
                         src="data:image/bmp;base64, {{ base64_encode($employees->PSPPHOTO) }}"/></td>
                <td>{{ $employees->PSNNAME }}</td>
                <td>{{ $employees->PSCCARDNO }}</td>
                <td>{{ $employees->DEPName }}</td>
                <td>{{ $employees->POSName }}</td>
                <td>{{ $employees->TTLName }}</td>
            </tr>
            </tbody>
        @endforeach
    </table>
    {{ $allEmployee->links() }}

@endsection
<script type="text/javascript">

</script>