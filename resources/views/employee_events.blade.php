@extends('layout')

@section('title', 'Events')

@section('content')
    <h1>List All Events</h1>
    <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Компанија</th>
                    <th>Име и Презиме</th>
                    <th>Број на картичка</th>
                    <th>Оддел</th>
                    <th>Настан</th>
                    <th>Статус</th>
                    <th>EPOH TIME</th>
                    <th>Device</th>
                    <th>IN/OUT</th>
                </tr>
            </thead>
        @foreach ($employeeEvents as $employeeEvent)
            <tbody>
                <tr>
                    <td>{{ $employeeEvent->PSNID }}</td>
                    <td>{{ $employeeEvent->CMPName }}</td>
                    <td>{{ $employeeEvent->PSNNAME }}</td>
                    <td>{{ $employeeEvent->PSCCARDNO }}</td>
                    <td>{{ $employeeEvent->DEPName }}</td>
                    <td>{{ $employeeEvent->EventTime }}</td>
                    <td>{{ $employeeEvent->EventStatus }}</td>
                    <td>{{ strtotime($employeeEvent->EventTime) }}</td>
                    <td>{{ $employeeEvent->DeviceIdx }}</td>
                    <td>{{ $employeeEvent->ReaderNo == 1 ? "IN" : "OUT" }}</td>
                </tr>
            </tbody>
        @endforeach
        </table>
    {{ $employeeEvents->links() }}
@endsection