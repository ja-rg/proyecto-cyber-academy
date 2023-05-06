<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('/');
    }

    public function getCountries()
    {
        $countries = DB::table('pais')->get();
        return response()->json($countries);
    }

    public function getCities(Request $request)
    {
        $cities = DB::table('ciudad')->where('cve_pais', $request->id)->get();
        return response()->json($cities);
    }
}