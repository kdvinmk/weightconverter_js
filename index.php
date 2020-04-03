<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="black">
            <div class="nav-wrapper center brand-logo">
                Converter
            </div>
        </nav>
    </header>
    <div class="container">
        <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s8">
                  <input placeholder="Enter the value..." id="metricSelector" type="number">
                </div>
                <div class="input-field col s4">
                    <select id="selectmetric" name="metricSelector" class="browser-default">
                        <!-- <option value="" disabled selected>Choose the metric...</option> -->
                        <option id="KG" selected>KiloGram</option>
                        <option id="G">Grams</option>
                        <option id="Pounds">Pounds</option>
                   </select>   
                </div>
              </div>
            </form>
        </div>
    
            <div class="row">
                <div class="card-panel">
                    <span class="white-text">KiloGrams : <p id="kgsvalue" style="display: inline;"></p> </span>
                </div>
            </div>
            <div class="row">
                <div class="card-panel">
                    <span class="white-text">Grams : <p id="gramsvalue" style="display: inline;"></p> </span>
                </div>
            </div>
            <div class="row">
                <div class="card-panel">
                    <span class="white-text">Pounds : <p id="poundsvalue" style="display: inline;"></p> </span>
                </div>
            </div>
        
    </div>
<script src="script.js"></script>
</body>
</html>