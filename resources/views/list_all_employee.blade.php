@extends('layout')

@section('title', 'Employees')


@section('content')
    <h1>List All Employees</h1>
    <form method="POST" class="form-inline" action="employee/filtered/all">
        @csrf
        <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="form-group">
                <label for="date_from" class="sr-only">Date from: </label>
                <input type="text" name="date_from" id="date_from" class="form-control datepicker"
                       placeholder="Date from:" autocomplete="off">
            </div>
        </div>
        <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="form-group">
                <label for="date_to" class="sr-only">Date to: </label>
                <input type="text" name="date_to" id="date_to" class="form-control datepicker" placeholder="Date to:"
                       autocomplete="off">
            </div>
        </div>
        <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="form-group">
                <div class='input-group date' id='datetimepicker6'>
                    <input type='text' class="form-control"/>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
        <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="form-group">
                <div class='input-group date' id='datetimepicker7'>
                    <input type='text' class="form-control"/>
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
        <div class="col-md-2 col-sm-4 col-xs-8">
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
                </SELECT>
            </div>
        </div>
        <div class="col-md-2 col-sm-4 col-xs-8">
            <div class="form-group">
                <select name="employee" id="employee" class="form-control width-180">
                    <option value="" selected="selected">Select</option>
                    @foreach ($allEmployee as $key => $value)
                        <option style="{{ ($value['active'] == 'Y') ? '':'background-color:#D3D3D3' }}"
                                value="<?= $value['PSNID'] ?>"><?= $value['PSNNAME'] ?></option>
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
    $(function () {
        $('#datetimepicker6').datetimepicker();
        $('#datetimepicker7').datetimepicker({
            useCurrent: false //Important! See issue #1075
        });
        $("#datetimepicker6").on("dp.change", function (e) {
            $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker7").on("dp.change", function (e) {
            $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        });
    });
</script>