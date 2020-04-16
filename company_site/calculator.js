// calculator
var inHour = 12.5;

    var calculate = function() {
        var calc = $('.calculator');
        var days = calc.find('.calculator__days .active').data('calc');
        var hours = calc.find('.calculator__hours .active').data('calc');
        var period = calc.find('.calculator__period .active').data('calc');

        var hoursInWeek = (7 - (7 - days)) * hours;        
        var profit = period / 7 * hoursInWeek * inHour;
        profit = profit - (profit % 100);
        calc.find('.calculator__result').hide();
        calc.find('.calculator__result').html('~'+ new Intl.NumberFormat('ru-RU').format(profit.toFixed(0)) +'$');
        calc.find('.calculator__result').show();
    };
    $('.calculator__days [data-calc], .calculator__hours [data-calc], .calculator__period [data-calc]').click(function() {
        $(this).parent().find('.calculator__active').css({left: $(this).index() * 33.333333 + '%'});
        $(this).parent().find('> div').removeClass('active');
        $(this).addClass('active');
        calculate();
    });
    calculate();

    // calculator touch
    var touches = {};
    var touchesMove = {};
    var touchCallback = function(el) {
        var t = touches[el.attr('class')];
        var tm = touchesMove[el.attr('class')];
        if (t && tm) {
            if (t.pageX !== tm.pageX && Math.abs(tm.pageX - t.pageX) > 70) {
                if (tm.pageX - t.pageX > 0) {
                    el.find('.active').next().click();
                } else {
                    el.find('.active').prev().click();
                }
                touches[el.attr('class')] = tm;
            }
        }
    };
    $('.calculator__days, .calculator__hours, .calculator__period').on({ 'touchstart' : function(e){
        touches[$(this).attr('class')] = e.touches[0];
        e.stopPropagation();
    }});
    $('.calculator__days, .calculator__hours, .calculator__period').on({ 'touchmove' : function(e){
        touchesMove[$(this).attr('class')] = e.touches[0];
        touchCallback($(this));
        e.stopPropagation();
    }});
    $('.calculator__days, .calculator__hours, .calculator__period').on({ 'touchend' : function(e){
        touchCallback($(this));
        e.stopPropagation();
    }});
